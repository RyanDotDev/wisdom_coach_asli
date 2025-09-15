"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { lato } from '@/lib/utils/fonts';
import { useForm, Controller } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
};

const FreeStory = () => {
  const { control, handleSubmit, clearErrors, reset, watch, formState: { errors } } = useForm<FormData>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      name: "",
      email: ""
    }
  });
  const [showDownload, setShowDownload] = useState<boolean>(true);

  const watchAll = watch();
  const isFormReady = watchAll.name && watchAll.email;

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/resend/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) throw new Error('Failed to send email');

      console.log('Email sent successfully', data);
      reset();
      setShowDownload(false); // Displays download button once form is filled successfully
    } catch (error) {
      console.error('Error sending form', error);
    }
  }

  return (
    <div className='h-auto p-[2rem]'>
      <div className='text-center flex flex-col'>
        {showDownload ? (
          <>
            <h1 className='font-serif text-4xl text-[var(--wisdom-red)]'>
              Want a Free Story?
            </h1>
            <div className='text-center mt-[2rem]'>
              <h2 className='text-lg font-medium'>
                Stories are a fantastic way of reaching out children and unlocking their imagination.
              </h2>
              <h2 className='text-lg font-medium'>
                Get your <span className='font-bold'>FREE</span> story Today!
              </h2>
              <Image 
                src='/images/wisdom_coach_image.webp'
                alt='Wisdom Coach Free Story'
                width={300}
                height={300}
                className='mx-auto'
              />
              <div>
                <h1>Fill in the form and download your <span className='font-bold'>FREE</span> story.</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='md:w-2xl w-full mx-auto mt-[3rem] flex flex-col text-left justify-center space-y-4'>
                  {/* NAME FIELD */}
                  <Controller 
                    name="name"
                    control={control}
                    rules={{ 
                      required: 'Name needs to be at least 2 characters',
                      pattern: {
                        value: /^[A-Za-z ]{2,50}$/,
                        message: "Name needs to be at least 2 characters"
                      }
                    }}
                    render={({ field }) => (
                      <>
                        <input 
                          {...field}
                          placeholder='Name'
                          className='border p-[1rem] rounded-sm border-gray-300'
                          onChange={(e) => {
                            field.onChange(e);
                            clearErrors("name" as keyof FormData)
                          }}
                          onBlur={field.onBlur}
                        />
                        {errors.name && 
                          <p className='text-red-500 text-[0.8rem]'>
                            {errors.name.message}
                          </p>
                        }
                      </>
                    )}                  
                  />

                  {/* EMAIL FIELD */}
                  <Controller 
                    name="email"
                    control={control}
                    rules={{
                      required: 'Email is required',
                      pattern: {
                        value: /^[^@]+@[^@]+\.[^@]+$/,
                        message: "A valid email address is required"
                      }
                    }}
                    render={({ field }) => (
                      <>
                        <input 
                          {...field}
                          placeholder='Email'
                          className='border p-[1rem] rounded-sm border-gray-300'
                          autoComplete='off'
                          onChange={(e) => {
                            field.onChange(e);
                            clearErrors("email" as keyof FormData)
                          }}
                          onBlur={field.onBlur}
                        />
                        {errors.email && 
                          <p className='text-red-500 text-[0.8rem]'>
                            {errors.email.message}
                          </p>
                        }
                      </>
                    )}
                  />

                  <button 
                    type='submit'
                    disabled={!isFormReady}
                    className='btn relative mx-auto max-w-[15rem] mt-[1rem] bg-[var(--wisdom-red)] cursor-pointer border-2 border-white text-white
                      p-4 rounded-2xl z-50 duration-300 active:scale-95'
                    >
                    <span className={`${lato.className}`}>CLAIM YOUR STORY</span>
                  </button>
                </form>
              </div>
            </div>
          </>
        ) : (
          <div>
            <h1>Click here to claim your story.</h1>
            <button 
              onClick={() => {
                const link = document.createElement("a")
                link.href = "/files/Adventures_in_Wisdom_Story_15_Choosing-Your-BFF-Share.pdf"
                link.download = "Wisdom_Free_Story.pdf"
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className='relative mt-[1rem] bg-[var(--wisdom-red)] cursor-pointer border-2 border-white text-white
              p-4 rounded-2xl z-50 duration-300 active:scale-95'
            >
              <span className={`${lato.className}`}>DOWNLOAD STORY</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default FreeStory