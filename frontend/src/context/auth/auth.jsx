import React, { createContext, useEffect, useState } from 'react'
import api from '../../api'
import { toast } from 'react-toastify';
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  


  useEffect(() => {
    let isMounted = true; // Flag to track if the component is mounted

    const fetchData = async () => {
      try {
        const response = await api.get('/users/profile');

        if (isMounted) {
          // Only update state if the component is still mounted
          toast.success(response.data.message || 'You are logged in', {
            position: toast.POSITION.TOP_RIGHT, // Change the position of the toast
            autoClose: 500, // Auto-close the toast after 3000 milliseconds (3 seconds)
            hideProgressBar: true, // Hide the progress bar
          });
         
          setUser(response.data);
          setIsLoading(false);
        }
      } catch (err) {
        // Handle errors and set the user to null
        if (isMounted) {
          // Only update state if the component is still mounted
          setUser(null);
          setIsLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      isMounted = false; // Set the flag to false when the component is unmounted
    };
  }, []);

console.log(user)

  const signup = async (data) => {
    try {

      const response = await api.post("/users", data);
      // Handle the response here, such as updating state or displaying a message
      toast.success(response.data.message || 'Singup  successfully', {
        position: toast.POSITION.TOP_RIGHT, // Change the position of the toast
        autoClose: 3000, // Auto-close the toast after 3000 milliseconds (3 seconds)
        hideProgressBar: false, // Hide the progress bar
      });
    //   navigate("/login")
    } catch (error) {
      // Handle any errors that occurred during the API call
      toast.error(error.response.data.message || 'Worng credential', {
        position: toast.POSITION.TOP_RIGHT, // Change the position of the toast
        autoClose: 3000, // Auto-close the toast after 3000 milliseconds (3 seconds)
        hideProgressBar: false, // Hide the progress bar
      });
    }

  }

  const login = async (data) => {
    try {
      const response = await api.post("/users/auth", data);

  


      toast.success(response.data.message || 'Login successfully', {
        position: toast.POSITION.TOP_RIGHT, // Change the position of the toast
        autoClose: 3000, // Auto-close the toast after 3000 milliseconds (3 seconds)
        hideProgressBar: false, // Hide the progress bar
      });
      console.log(response)
      setUser(response.data)
      // Handle the response here, such as updating state or displaying a messag
      // navigate("/")
    } catch (error) {
   

      toast.error(error.response.data.message || 'Worng credential', {
        position: toast.POSITION.TOP_RIGHT, // Change the position of the toast
        autoClose: 3000, // Auto-close the toast after 3000 milliseconds (3 seconds)
        hideProgressBar: false, // Hide the progress bar
      });
    }
  }
  const logout = async() => {
    try {
        const response = await api.post("/users/logout");
   

  
        toast.success(response.data.message || 'Login in successfully', {
          position: toast.POSITION.TOP_RIGHT, // Change the position of the toast
          autoClose: 3000, // Auto-close the toast after 3000 milliseconds (3 seconds)
          hideProgressBar: false, // Hide the progress bar
        });
        setUser(null)
   
        // Handle the response here, such as updating state or displaying a messag
        // navigate("/")
      } catch (error) {
        // Handle any errors that occurred during the API call
  
        toast.error(error.response.data.message || 'Worng credential', {
          position: toast.POSITION.TOP_RIGHT, // Change the position of the toast
          autoClose: 3000, // Auto-close the toast after 3000 milliseconds (3 seconds)
          hideProgressBar: false, // Hide the progress bar
        });
      }
  }


//   const forgetPassword = async (data) => {
//     let response = await api.post("/users/forgetemail", data)
//     try {
//       toast.success(response.data.message || 'email sent successfully', {
//         position: toast.POSITION.TOP_RIGHT, // Change the position of the toast
//         autoClose: 3000, // Auto-close the toast after 3000 milliseconds (3 seconds)
//         hideProgressBar: false, // Hide the progress bar
//       });
//     } catch (error) {
//       // Handle any errors that occurred during the API call

//       toast.error(error.response.data.message || 'Worng credential', {
//         position: toast.POSITION.TOP_RIGHT, // Change the position of the toast
//         autoClose: 3000, // Auto-close the toast after 3000 milliseconds (3 seconds)
//         hideProgressBar: false, // Hide the progress bar
//       });
//     }

//   }
//   const resetPassword = async (data) => {
//     let response = await api.post("/users/resetpassword", data)
//     try {
//       toast.success(response.data.message || 'password reset successfully', {
//         position: toast.POSITION.TOP_RIGHT, // Change the position of the toast
//         autoClose: 3000, // Auto-close the toast after 3000 milliseconds (3 seconds)
//         hideProgressBar: false, // Hide the progress bar
//       });
//       navigate("/login")
//     } catch (error) {
//       // Handle any errors that occurred during the API call

//       toast.error(error.response.data.message || 'Worng credential', {
//         position: toast.POSITION.TOP_RIGHT, // Change the position of the toast
//         autoClose: 3000, // Auto-close the toast after 3000 milliseconds (3 seconds)
//         hideProgressBar: false, // Hide the progress bar
//       });
//     }

//   }



  const value = {
    user,
    isLoading,
    signup,
    login,
    logout,
    // forgetPassword,
    // resetPassword
  }
  return (
    <AuthContext.Provider value={value}>
    {isLoading ? (<div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900 sm:h-20 sm:w-20"></div>
    </div>
    ) : (
      children
    )}
  </AuthContext.Provider>
  )
}

export default AuthProvider
