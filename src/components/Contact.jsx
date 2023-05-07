import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSending, setSent] = useState('0');
  const [alert, setAlert] = useState("opacity-0");
  const [values, setValues] = useState({
    user_email: '',
    user_name: '',
    user_phone: '',
    message: ''
  })

  

  const sendEmail = (e) => {
    e.preventDefault();
    setSent('1')
    emailjs.sendForm('service_ipqihi2', 'template_dp7mndu', form.current, 'x5ldj7hCbXs9GZBHH')
      .then((result) => {
          console.log(result.text);
          console.log(form.current.value)
          setAlert("opacity-100")
          setSent("2")
          setValues({
              user_email: '',
              user_name: '',
              user_phone: '',
              message: ''
            })
          setTimeout(() => {
            setSent('0')
            
            setAlert("opacity-0")
          }, "3000")
        
      }, (error) => {
          console.log(error.text);
          alert("Failed to send. Please try again.")
      });
  };

  const onInput = (e) => {
    const { value, name } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }


  const sending = () => {
    if (isSending === "1") {
      return (
        <>
          <svg aria-hidden="true" className="inline w-4 h-4 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
        </>
      )
    } else if (isSending === "2") {
      return (
        <img src="../src/assets/icons/icon_done_white.png" className="w-4 h-4 rounded-full border-gray-200 border-solid border-2" />
      )
    } else {
      return <p className="text-xs font-medium">Send</p>
    }
  }


  return (
    <article id='Contact' className="bg-main-100 flex flex-col justify-center items-center w-full h-fit min-h-[650px] px-8 pt-8 text-left font-medium">
      <div className="max-w-[400px] w-full flex flex-col justify-center desktop:max-w-[550px]">
        <h1 className="block self-start font-heading font-bold text-xl mt-5 text-sub-2 desktop:text-3xl desktop:self-center">Contact</h1>
        <p className="font-sans text-xs desktop:self-center desktop:text-sm">Feel free to ask me anything about me.</p>
        <form className="w-full max-w-[550px] flex flex-col justify-center items-center mt-5 " ref={form} onSubmit={sendEmail}>
          <div className="relative w-full my-1">
            <input type="text" id="floating_outlined" placeholder=" " name="user_name" required value={values.user_name} onInput={onInput}
              className="block px-2.5 pb-2.5 pt-4 w-full h-9 text-xs text-neutral-300 bg-transparent border-1 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-sub-1 peer desktop:h-11" />
            <label htmlFor="floating_outlined" 
              className="absolute text-xs text-gray-400  duration-300 transform -translate-y-4 scale-75 top-2 z-5 origin-[0] bg-main-100  px-2 peer-focus:px-2 peer-focus:text-sub-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 desktop:text-sm">Name *</label>
          </div>
          <div className="relative w-full my-1">
            <input type="email" id="floating_outlined" placeholder=" " name="user_email" required value={values.user_email} onInput={onInput}
              className="block px-2.5 pb-2.5 pt-4 w-full h-9 text-xs text-neutral-300 bg-transparent border-1 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-sub-1 peer desktop:h-11" />
            <label htmlFor="floating_outlined" 
              className="absolute text-xs text-gray-400  duration-300 transform -translate-y-4 scale-75 top-2 z-5 origin-[0] bg-main-100 px-2 peer-focus:px-2 peer-focus:text-sub-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 desktop:text-sm">Email *</label>
          </div>
          <div className="relative w-full my-1">
            <input type="tel" id="floating_outlined" placeholder=" " name="user_phone"  value={values.user_phone} onInput={onInput}
              className="block px-2.5 pb-2.5 pt-4 w-full h-9 text-xs text-neutral-300 bg-transparent border-1 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-sub-1 peer desktop:h-11" />
            <label htmlFor="floating_outlined" 
              className="absolute text-xs text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-5 origin-[0] bg-main-100 px-2 peer-focus:px-2 peer-focus:text-sub-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 desktop:text-sm">Contact</label>
          </div>
          <div className="relative w-full my-1">
            <textarea id="floating_outlined" placeholder=" " name="message" required rows="8" value={values.message} onInput={onInput}
              className="resize-none block px-2.5 pb-2.5 pt-4 w-full text-xs text-neutral-300 bg-transparent border-1 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-sub-1 peer" />
            <label htmlFor="floating_outlined" 
              className="absolute block top-3 text-xs text-gray-400 duration-300 transform -translate-y-5 scale-75 z-5 origin-[0] bg-main-100 px-2 peer-focus:px-2 peer-focus:text-sub-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-5 peer-focus:top-2 peer-focus:scale-75 peer-focus:pb-2 peer-focus:-translate-y-4 left-1 desktop:text-sm">Message *</label>
          </div>
          <button className="my-4 bg-sub-1 hover:drop-shadow-sub1 transition duration-300 w-20 h-7 rounded-full desktop: desktop:scale-[120%]" type="submit">
            <div role="status" className="relative flex flex-col justify-center items-center">
              {sending()}
            </div>
          </button>
          <div className={"flex items-center px-3 py-2 my-2 text-xs desktop:text-base duration-500 transition text-green-400 border border-green-300 rounded-lg bg-transparent " + alert } role="alert">
            <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
            <span className="sr-only">Done!</span>
            <div>
              <span className="font-medium">Thanks for contact!<br></br> I'll reply as soon as possible.</span>
            </div>
          </div>
        </form>
      </div>
    </article>

  )
}

export default Contact