'use client';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { SuccessModal } from '../modal/successModal';

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
   const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // Replace with your Formspree endpoint
      const response = await fetch('https://formspree.io/f/mkgragdd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      if (response.ok) {
        setIsSuccessModalOpen(true);
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    
    
      <form onSubmit={handleSubmit(onSubmit)}
       className="space-y-4 lg:w-[560px]">
    <div>
          <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium text-[#C7C7C7]">
            Name
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            id="name"
            type="text"
            placeholder='Alimat Jamiu'
            className="text-white bg-[#1A1A1A] rounded-lg px-3 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
    </div>

      <div>
          <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium text-[#C7C7C7]">
            Email
          </label>
          <input
            {...register('email', { required: 'Email is required' })}
            id="email"
            type="email"
            className=" bg-[#1A1A1A] rounded-lg px-3 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          />
        </div>
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

       <div>
         <div className="flex flex-col">
          <label htmlFor="subject" className="mb-1 font-medium text-[#C7C7C7]">
            Subject
          </label>
          <input
            {...register('subject', { required: 'Subject is required' })}
            id="subject"
            type="text"
            className=" bg-[#1A1A1A] rounded-lg px-3 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          />
        </div>
        {errors.subject && (
          <span className="text-red-500 text-sm">{errors.subject.message}</span>
        )}
       </div>
<div>
  
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 font-medium text-[#C7C7C7]">
            Message
          </label>
          <textarea
            {...register('message', { required: 'Message is required' })}
            id="message"
            rows="4"
            className=" bg-[#1A1A1A] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 text-white focus:ring-blue-500 resize-none"
          ></textarea>
        </div>
        {errors.message && (
          <span className="text-red-500 text-sm">{errors.message.message}</span>
        )}
</div>

        <div>
          <button
  type="submit"
  disabled={isSubmitting}
  className={`bg-[#D3E97A] text-black px-10 py-4 rounded-full transition font-semibold mt-4 ${
    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
  }`}
>
  {isSubmitting ? 'Sending...' : 'SUBMIT'}
</button>

           <SuccessModal 
    isOpen={isSuccessModalOpen} 
    onClose={() => setIsSuccessModalOpen(false)}
    message="Thank you for contacting us! We'll get back to you soon."
  />
        </div>
      </form>
    
  );
}

