import { useEffect, useState } from "react";
import { Modal } from "../modals/Modal";

export const GameTable = ({gameTimer}) => {
  const [decks, SetDecks] = useState([]);
  const [modalState, SetModalState] = useState(false);
  const [cardData, SetCardData] = useState({})

  const [answQuest, setAnswQuest] = useState(
    JSON.parse(localStorage.getItem('answQuest')) ?? []);
  
  useEffect(() => {
    (async() => {
      const req = await fetch('/game/start');
      SetDecks(await req.json());
    })();

    // eslint-disable-next-line
  }, []);

  const tdHandler = (question, answer, score, _id) => {
    SetCardData({
      question, 
      answer, 
      score,
      _id,
    })
    SetModalState(true);
  }
  return (
    <div className="flex flex-col">
      <p>У вас осталось: {gameTimer}</p>
      <Modal 
        modalState={modalState} 
        SetModalState={SetModalState} 
        cardData={cardData}
        answQuest={answQuest}
        setAnswQuest={setAnswQuest}
      />
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              
              <tbody className="bg-white divide-y divide-gray-200">
                {decks.map((deck) => {
                return (
                    <tr key={deck._id}>
                    <td className="px-6 py-4 break-words max-w-xs">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{deck.title}</div>
                        </div>
                      </div>
                    </td>
                    {deck.cards_array.map((card) => {
                      const {question, answer, score, _id} = card;
                      let classes = "px-6 py-4 whitespace-nowrap bg-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50";
                      return (
                      <td
                        key={card._id}
                        className={answQuest.includes(_id) ? classes + ' pointer-events-none opacity-50 bg-gray-300': classes } 
                        onClick={() => tdHandler(question, answer, score, _id)}
                      >
                        <div className="text-sm font-medium text-gray-900 pointer-events-none">{card.score}</div>
                      </td>
                      )
                      })}
                  </tr>
                )})
              }
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  )
}