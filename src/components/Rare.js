import React from "react"
import { Route, Redirect, useHistory } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { CommentDetail } from "./comment/CommentDetail"
import { CommentForm } from "./comment/CommentForm"


export const Rare = () => {
    const history = useHistory()
        return(
    <>
        <Route render={() => {
            if (localStorage.getItem("rare_user_id")) {
                return <>
                    <NavBar />
                    <CommentForm />
                    <CommentDetail />
                    <ApplicationViews />
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={() => {
            if (localStorage.getItem("rare_user_id")) {
                return <Redirect to="/" />
            } else {
                return <Login />
            }
        }} />

        <Route path="/register" render={() => {
            if (localStorage.getItem("rare_user_id")) {
                return <Redirect to="/" />
            } else {
                return <Register history = {history}/>
            }
        }} />
    
    </>)
        
}
