import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { setGameState } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

export const Modal = ({
  modalState, 
  SetModalState, 
  cardData, 
  answQuest,
  setAnswQuest,
}) => {
  const {answer, question, score, _id} = cardData;
  const cancelButtonRef = useRef(null);
  const gameState = useSelector((store) => (store?.gameState));
  const dispatch = useDispatch();

  const answerHander = (e) => {
    e.preventDefault();
    const userAnswer = e.target.answer.value;
    
    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
      dispatch(setGameState(score));
      setAnswQuest([...answQuest, answQuest[answQuest.length] =_id]);
      localStorage.setItem('answQuest', JSON.stringify(answQuest));
    }
    
    SetModalState(false);
  }

  return (
    <Transition.Root show={modalState} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={SetModalState}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-8 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="text-center sm:mt-0 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      Вопрос:
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-lg font-normal text-gray-700">
                        {question}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-8 flex flex-col">
              <form onSubmit={answerHander}>
               <input 
                  type='text'
                  name='answer'
                  placeholder='Ваш ответ'
                />
                <div
                  className='my-4'
                >
                <button
                  type="submit"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mr-4 sm:w-auto sm:text-sm"
                  onClick={() => SetModalState(false)}
                >
                  Ответить
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:mr-4 sm:w-auto sm:text-sm"
                  onClick={() => SetModalState(false)}
                  ref={cancelButtonRef}
                >
                  Я хз(
                </button>
                
                </div>
                </form >
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}