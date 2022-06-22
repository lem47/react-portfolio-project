import React, { useState } from 'react';
import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './GoodsList/GoodsList';
import './Goods.scss';

export const Goods: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = async () => {
    const allGoodsFromServer = await getAll();

    setGoods(allGoodsFromServer);
  };

  const get5FirstGoods = async () => {
    const fiveFirstGoodsFromServer = await get5First();

    setGoods(fiveFirstGoodsFromServer);
  };

  const getRedGoods = async () => {
    const redGoodsFromServer = await getRed();

    setGoods(redGoodsFromServer);
  };

  const hideGoodsList = () => {
    setGoods([]);
  };

  return (
    <>
      <h1 className="Goods__title">
        List of goods from server
      </h1>
      <div className="Goods">
        <div className="Goods__buttons">
          <button
            type="button"
            className="Goods__button"
            onClick={getAllGoods}
          >
            Show all
          </button>

          <button
            type="button"
            className="Goods__button"
            onClick={get5FirstGoods}
          >
            Show 5 first
          </button>

          <button
            type="button"
            className="Goods__button"
            onClick={getRedGoods}
          >
            Show only red
          </button>
        </div>

        {goods.length > 0 && (
          <GoodsList goods={goods} />
        )}

        {goods.length > 0 && (
          <button
            type="button"
            className="Goods__button"
            onClick={hideGoodsList}
          >
            Hide
          </button>
        )}
      </div>
    </>
  );
};
