import React from 'react';
import {Link}  from 'react-router-dom';

export function Home(){
    return(
        <h1>[Mit tom en]</h1>
    );
}
export function About(){
    return(
        <div>
            <h1>[About]</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="event">Events</Link>
                <Link to="contact">Contact</Link>

            </nav>
        </div>
    );
} 
export function Events(){
    return(
        <div>
            <h1>[Events]</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="event">Events</Link>
                <Link to="contact">Contact</Link>

            </nav>
        </div>
    );
}
export function Contact(){
    return(
        <div>
            <h1>[Contact]</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="event">Events</Link>
                <Link to="contact">Contact</Link>

            </nav>
        </div>
    );
}
export function Whoops404(){
    <div>
        This page is not exist
    </div>
}