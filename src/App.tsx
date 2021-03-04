import React from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Setting} from './components/Setting/Setting';
import { BrowserRouter, Route  } from "react-router-dom";
import state from "./DataStates/State";


function App (props) {
debugger
  return (
      <BrowserRouter>
          <div className={s.appWrapper}>
              <Header/>

              <Nav/>
              <div className={s.main}>

                  <Route  path='/profile' render = {
                      () =>  <Profile data = {state.dataPosts}
                      addPost= {props.addPost}/>
                  }/>
                  <Route   path='/message'  render = {
                      () => <Dialogs
                          dialogData = {state.dialogData}
                          addDialog = {props.addDialog}
                          messageData = {state.messageData}
                          textAreaChange = {props.textAreaChange}
                      />
                  } />
                  <Route path='/news' component={News} />
                  <Route  path='/music' component={Music} />
                  <Route  path='/setting' component={Setting} />

              </div>
          </div>
      </BrowserRouter>

  )
}

export default App;

