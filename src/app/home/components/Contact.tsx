"use client"
import React, { useState } from 'react';
import { CircleCheckBig } from 'lucide-react';
import { useForm, Controller } from 'react-hook-form';

interface FormData {
  name: string,
  email: string,
  countryCode: string,
  phoneNumber: string,
  message: string
}

const Contact = () => {
  // react states for required field inputs
  const { control, handleSubmit, clearErrors, reset, watch, formState: { errors } } = useForm<FormData>({ 
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      name: "",
      email: "",
      /* countryCode: "", */
      /* phoneNumber: "", */
      message: "",
    }
  });
  const [show, setShow] = useState<boolean>(true);

  const watchAll = watch();
  const isFormReady = watchAll.name && watchAll.email && /* watchAll.phoneNumber */ watchAll.message.length >= 100 && !Object.keys(errors).length;

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/resend/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error('Failed to send email')

      console.log('Email sent successfully', data);
      reset();
      setShow(false); // Displays confirmation once form is submitted
    } catch (error) {
      console.error('Error sending email', error)
      // showErrorToast('There was an error. Please try again.')
    }
  };

  return (
     <div className='h-auto p-[2rem]'>
      <div className='text-center flex flex-col'>
        <h1 className='font-serif text-4xl text-[var(--wisdom-red)]'>
          Contact Me
        </h1>
          {show ? (
            <>
              <p className='mt-[1rem]'>Want to find out more, send me a message or contact me on WhatsApp.</p>
              <form onSubmit={handleSubmit(onSubmit)} className='md:w-2xl w-full mx-auto mt-[3rem] flex flex-col text-left justify-center space-y-4'>
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
                
                {/* FOR FUTURE USE IF CLIENT CHANGES MIND
                  <div className='flex gap-[1rem]'>
                    <Controller 
                      name="countryCode"
                      control={control}
                      rules={{ required: "Country code is required "}}
                      render={({ field }) => (
                        <div className='flex flex-col'>
                          <select 
                            {...field}
                            className='select appearance-none border p-[1.1rem] rounded-sm border-gray-300'
                            onBlur={field.onBlur}
                          >
                            <option value=''>Country Code</option>
                            <option value='+1'>+1 (US)</option>
                            <option value='+44'>+44 (UK)</option>
                          </select>
                          {errors.countryCode && 
                            <p className='text-red-500 text-[0.8rem]'>
                              {errors.countryCode.message}
                            </p>
                          }
                        </div>
                      )}
                    />

                    <Controller 
                      name="phoneNumber"
                      control={control}
                      rules={{
                        required: 'A valid phone number is required',
                        pattern: {
                          value: /^[+0-9]{7,15}$/,
                          message: "Valid phone number is required"
                        }
                      }}
                      render={({ field }) => (
                        <div className='flex flex-col w-full'>
                          <input 
                            {...field}
                            type="tel"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            placeholder='Phone Number'
                            className='border p-[1rem] rounded-sm border-gray-300'
                            autoComplete='off'
                            onKeyDown={(e) => {
                              if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
                                e.preventDefault()
                              }
                            }}
                            onChange={(e) => {
                              field.onChange(e);
                              clearErrors("phoneNumber" as keyof FormData)
                            }}
                            onBlur={field.onBlur}
                          />
                          {errors.phoneNumber && 
                            <p className='text-red-500 text-[0.8rem]'>
                            {errors.phoneNumber.message}
                            </p>
                          }
                        </div>
                      )}
                    />
                  </div>
                */}

                <Controller 
                  name="message"
                  control={control}
                  rules={{ 
                    required: 'Message needs to be 100 characters minimum',
                    minLength: {
                      value: 100,
                      message: "Message must be at least 100 characters"
                    }
                  }}
                  render={({ field }) => (
                    <>
                      <textarea 
                        {...field}
                        placeholder='Message'
                        rows={10}
                        cols={10}
                        minLength={100}
                        className='border p-[1rem] rounded-sm border-gray-300'
                        onChange={(e) => {
                          field.onChange(e);
                          clearErrors("message" as keyof FormData)
                        }}
                        onBlur={field.onBlur}
                      />
                      {errors.message && 
                        <p className='text-red-500 text-[0.8rem]'>
                        {errors.message.message}
                        </p>
                      }
                    </>
                  )}
                />
               <button
                type='submit'
                disabled={!isFormReady}
                className={`btn relative mx-auto mt-[1rem] w-[170px] bg-[var(--wisdom-red)] cursor-pointer border-2 border-white text-white
                  p-4 rounded-2xl z-50 duration-300 active:scale-95`}
               >
                SEND MESSAGE
              </button>
            </form>
          </>
          ) : (
            <div className='mt-[2rem]'>
              <CircleCheckBig 
                style={{ color: 'var(--wisdom-red)' }}
                strokeWidth={0.4} 
                size={250}
                className='mx-auto'
              />
              <div className='mt-[2rem]'>
                <p className='text-md font-[200]'>Thank you for your enquiry!</p>
                <p className='text-md font-[200]'>You should hear from me soon.</p>
              </div>
            </div>
          )}
        
      </div>
    </div>
  )
}

export default Contact