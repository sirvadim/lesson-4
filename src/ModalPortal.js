import React from 'react'
import ReactDOM from 'react-dom'
import { ModalContainer } from 'react-router-modal'
import './Modal.css'

const modalRoot = document.getElementById('modal')

export const ModalPortal = () =>
  ReactDOM.createPortal(<ModalContainer />, modalRoot)
