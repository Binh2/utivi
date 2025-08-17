import { useState } from 'react'
import searchIcon from './assets/search.svg'
import notificationBellIcon from './assets/notification-bell.svg'
import createVideoIcon from './assets/create-video.svg'
import HamburgerMenuIcon from './assets/hamburger-menu.svg'
import microphoneIcon from './assets/microphone.svg'
import profileIcon from './assets/profile.png'
import logoIcon from './assets/logo.svg'
import thumpnail from './assets/thumpnail.png'
import './App.css'

export default function App() {
  return (
    <>
      <div className='header-container'>
        <Header></Header>
        <Filters></Filters>
      </div>
      <Sidebar></Sidebar>
      <VideoGallery></VideoGallery>
      <VideoGallery></VideoGallery>
      <VideoGallery></VideoGallery>
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


import homePageIcon from './assets/home-page.svg'
import shortsPageIcon from './assets/shorts-page.svg'
import subscriptionsPageIcon from './assets/subscriptions-page.svg'
import youPageIcon from './assets/you-page.svg'
import downloadsPageIcon from './assets/downloads-page.svg'
function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <button className="sidebar__button">
            <img src={homePageIcon} alt="Home Page Icon" className="sidebar__icon" />
            <span className="sidebar__text">Home</span>
          </button>
        </li>
        <li className="sidebar__item">
          <button className="sidebar__button">
            <img src={shortsPageIcon} alt="Shorts Page Icon" className="sidebar__icon" />
            <span className="sidebar__text">Shorts</span>
          </button>
        </li>
        <li className="sidebar__item">
          <button className="sidebar__button">
            <img src={subscriptionsPageIcon} alt="Subscriptions Page Icon" className="sidebar__icon" />
            <span className="sidebar__text">Subscriptions</span>
          </button>
        </li>
        <li className="sidebar__item">
          <button className="sidebar__button">
            <img src={youPageIcon} alt="You Page Icon" className="sidebar__icon" />
            <span className="sidebar__text">You</span>
          </button>
        </li>
        <li className="sidebar__item">
          <button className="sidebar__button">
            <img src={downloadsPageIcon} alt="Downloads Page Icon" className="sidebar__icon" />
            <span className="sidebar__text">Downloads</span>
          </button>
        </li>
      </ul>
    </aside>
  )
}

import nextIcon from './assets/next.svg'
function Filters() {
  return (
    <div className="filters">
      <button className="filters__button --selected">All</button>
      <button className="filters__button">Dramedy</button>
      <button className="filters__button">Music</button>
      <button className="filters__button">Gaming</button>
      <button className="filters__button">Podcasts</button>
      <button className="filters__button filters__next">
        <img src={nextIcon} alt="Next Icon" />
      </button>
    </div>
  )
}
function VideoGallery() {
  return (<div className="video-gallery">
    <VideoCard
        title="Blind Dating"
        description="Zach Justice"
        thumbnail={thumpnail}
      />
    <VideoCard
        title="Blind Dating"
        description="Zach Justice"
        thumbnail={thumpnail}
      />
    <VideoCard
        title="Blind Dating"
        description="Zach Justice"
        thumbnail={thumpnail}
        className="--last"
      />
  </div>)
}
function VideoCard({ title, description, thumbnail, className = '' }: { title: string, description: string, thumbnail: string, className?: string }) {
  return (
    <div className={`video-card ${className}`}>
      <img src={thumbnail} alt={title} className="video-card__thumbnail" />
      <h3 className="video-card__title">{title}</h3>
      <p className="video-card__description">{description}</p>
    </div>
  )
}