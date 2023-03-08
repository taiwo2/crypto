import React from "react";
import styled from "styled-components";
// import BidSticky from "./BidSticky";
import Asset from "../Asset";
const Modal__wrapper = styled.div`
  position: fixed;
  top: 5%;
  left: 10%;
  width: 70%;
  height: 100%;
  background: #14141f8a;
  z-index: 4444444;
`

const single__modal =  styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 500px;
  transform: translate(-50%, -50%);
  background: #343444 !important;
  border-radius: 5px;
  padding: 30px;
  z-index: 5555555 !important;
  cursor: pointer;
`
const single__modalh6 = styled.h6`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 10px;
`

const Close__modal = styled.span`
  position: absolute;
  top: 9px;
  right: 7px;
  z-index: 6666666;

`

const Close__modal_1= styled.i`
  padding: 5px;
  background: #5142fc;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
`


const Modal = ({ setShowModal }) => {
  return (
    <Modal__wrapper>
      <single__modal>
        <Close__modal>
          <Close__modal_1 
          onClick={() => setShowModal(false)}>X</Close__modal_1>
        </Close__modal>
       <Asset/>

        <button className="place__bid-btn">Place a Bid</button>
      </single__modal>
    </Modal__wrapper>
  );
};

export default Modal;
