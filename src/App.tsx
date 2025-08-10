import { useState } from 'react'
import searchIcon from './assets/search.svg'
import notificationBellIcon from './assets/notification-bell.svg'
import createVideoIcon from './assets/create-video.svg'
import HamburgerMenuIcon from './assets/hamburger-menu.svg'
import microphoneIcon from './assets/microphone.svg'
import profileIcon from './assets/profile.png'
import logoIcon from './assets/logo.svg'
import './App.css'

function App() {

  return (
    <>
      <Header></Header>
    </>
  )
}
function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <HamburgerMenu></HamburgerMenu>
        <Logo></Logo>
      </div>
      <div className="header__center">
        <SearchBar></SearchBar>
        <VoiceRecorderButton></VoiceRecorderButton>
      </div>
      <div className="header__right">
        <CreateVideoButton></CreateVideoButton>
        <NotificationButton></NotificationButton>
        <ProfileButton></ProfileButton>
      </div>
    </header>
  )
}
function Logo() {
  return <button className="logo">
    <img src={logoIcon} alt="UTiVi Logo" />
    <span className="logo__text">UTiVi</span>
  </button>
}
function HamburgerMenu() {
  return <button className='hamburger-menu --button'>
    <img src={HamburgerMenuIcon} alt="Hamburger Menu Icon" />
  </button>
}
function SearchBar() {
  return (
    <form className="search-bar --button">
      <input type="text" placeholder="Search..." className="search-bar__input search-bar__first" />
      <button type="submit" className="search-bar__button search-bar__last">
        <img src={searchIcon} alt="Search Icon" />
      </button>
    </form>
  )
}
function VoiceRecorderButton() {
  return (
    <button className='voice-recorder-button --button'>
      <img src={microphoneIcon} alt="Microphone Icon" />
    </button>
  )
}
function CreateVideoButton() {
  return (
    <button className='create-video-button --button'>
      <img src={createVideoIcon} alt="Create Video Icon" />
      <span className="create-video-button__text">Create</span>
    </button>
  )
}
function NotificationButton() {
  return (
    <button className='notification-button --button'>
      <img src={notificationBellIcon} alt="Notification Bell Icon" />
      {/* <span className="notification-count">3</span> */}
    </button>
  )
}
function ProfileButton() {
  return (
    <button className='profile-button --button'>
      <img src={profileIcon} alt="Profile Icon" className='profile-button__img' />
    </button>
  )
}

export default App
