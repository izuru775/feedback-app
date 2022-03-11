import { createContext, useState ,useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading,setIsLoading]= useState(true)
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit,setFeedbackEdit] = useState({
    item:{},
    edit:false
  })

  useEffect(()=>{
    fetchFeedback()
  },[])
  // Fetch feedback
  const fetchFeedback = async ()=>{
    const response = await fetch('http://localhost:3001/feedback?_sort=id&_order=desc')
    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)
  }

  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  // Update feedback item
  const updateFeedback =(id,updItem)=>{
    setFeedback(feedback.map((item)=>item.id === id?{...item,...updItem}:item))
  }
  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4(); // To generate unique id
    setFeedback([newFeedback, ...feedback]); // Since state is immutable, you need to create a new array with newfeedback
  };
  // Set items to be updated
  const editFeedback =(item)=>{
    setFeedbackEdit({
      item,
      edit:true
    })
  }

  return (
    <FeedbackContext.Provider value={{feedback,feedbackEdit,isLoading,deleteFeedback,addFeedback,editFeedback,updateFeedback}}>{children}</FeedbackContext.Provider>
  );
};

export default FeedbackContext
