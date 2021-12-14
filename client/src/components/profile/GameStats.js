import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { Button } from '../ui-elements/buttons/Button';

export const GameStats = () => {

  const user = useSelector((store) => (store.user));
  const [stats, setStats] = useState([]);

  useEffect(() => {
    (async() => {
      const req = await fetch(`/game/${user._id}/stats`);
      setStats(await req.json());
      console.log('staaats=>', stats)
    })();
  }, []);

  return (
    <div class="">
      { stats.length 
        ? <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Дата Игры
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Правильные Ответы
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Общий Счет
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      {stats.map((stat) => {
                        return (
                          <tr key={stat._id}>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="flex items-center">
                                <div class="ml-4">
                                  <div class="text-sm font-medium text-gray-900">
                                    {stat.date}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">
                                {stat.count_card}
                              </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {stat.total_score}
                              </span>
                            </td>
                          </tr>
                        )})
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        : <div className="text-center">
            <p>Вы еще не сыграли ни в одну игру!</p>
            <Button name={'Начать игру'} link='/game/start' />
          </div>
      }
    </div>
  )
}