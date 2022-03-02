import React,{useEffect} from 'react'
import styled from 'styled-components'
import { BiCodeAlt } from "react-icons/bi";
import { medium,small,large } from '../responsive';
import Movie from "../assets/movie-app.png"
import Meal from "../assets/meal-app.png"
import Todo from "../assets/todo-app.png"
import User from "../assets/user-management.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeaderContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 7rem;
margin-bottom: 2rem;
${large({marginTop:"9rem"})}
${medium({marginTop:"12rem"})}
${small({marginTop:"15rem"})}
`
const IconDiv=styled.div`
color: grey;
font-size: 3.5rem;
`
const IconHeader=styled.div`
font-size: 1.3rem;
font-weight: 600;
`
const Container=styled.div`
display: flex;
justify-content: center;
`
const InnerContainer=styled.div`
width: 75%;
padding: 10px;
margin: 1rem;
`

const CardContainer=styled.div`
display: flex;
justify-content: center;
gap: 2rem;
flex-wrap: wrap;
`
const OuterCard=styled.div`
`
const InnerCard=styled.div`
`
const CardDetails=styled.div`
position: absolute;
display: none !important;
top: 0;
left: 0;
background-color: rgba(0,0,0, 0.4);
height: 100%;
width: 100%;
color: white;
text-align: center;
padding: 7px;
gap: 1rem;
`
const Card=styled.div`
width: 29rem;
height: 20rem;
position: relative;
${small({width:"20rem",padding:"5px"})}
&:hover ${CardDetails}{
 display: flex !important;
flex-direction: column;
justify-content: center;
align-items: center;
}
`
const CardImg=styled.img`
width:100%;
height: 100%;
object-fit: cover;
border-radius: 5px;
;
`

const DetailHeader =styled.div`
font-size: 1.3rem;
font-weight: 700;
`
// const DetailSub =styled.div`
// font-weight: 500;
// font-size: 0.9rem;
// `

const DetailBody =styled.div`
font-weight: 500;
`

const DetailFooter =styled.div`
display: flex;
gap: 0.5rem;
`
export default function Projects() {

    useEffect(() => {
        AOS.init({})
    }, [])


    return (
        <div id="projects">
            <HeaderContainer>
                    <IconDiv><BiCodeAlt/></IconDiv>
                    <IconHeader>Apps I've Built</IconHeader>
            </HeaderContainer>
            <Container>
                <InnerContainer>
                    <CardContainer>
                        <OuterCard >
                            <InnerCard>
                                <Card data-aos="zoom-out" >
                                    <CardImg src={Movie}/>
                                    <CardDetails>
                                        <DetailHeader>Movie App</DetailHeader>
                                        <DetailBody>Mern stack movie app with login authentication</DetailBody>
                                        <DetailFooter>
                                            <div><button className="btn btn-primary"><a style={{color:"inherit",textDecoration:"none"}} target="_blank"  href="https://my-moviee-app1.netlify.app/">Live Demo</a></button></div>
                                            <div><button className="btn btn-success"><a  style={{color:"inherit",textDecoration:"none"}} target="_blank" href="https://github.com/suganyajap/react-movie">View Code</a></button></div>
                                        </DetailFooter>
                                    </CardDetails>
                                </Card>
                                
                            </InnerCard>
                        </OuterCard>

                        <OuterCard>
                            <InnerCard>
                                <Card data-aos="zoom-out">
                                    <CardImg src={Meal}/>
                                    <CardDetails>
                                        <DetailHeader>Meal App</DetailHeader>
                                        <DetailBody>A simple Mern stack Meal App</DetailBody>
                                        <DetailFooter>
                                            <div><button className="btn btn-primary"><a style={{color:"inherit",textDecoration:"none"}} target="_blank"  href="https://my-meals-app1.netlify.app/">Live Demo</a></button></div>
                                            <div><button className="btn btn-success"><a  style={{color:"inherit",textDecoration:"none"}} target="_blank" href="https://github.com/suganyajap/meal-app-react">View Code</a></button></div>
                                        </DetailFooter>
                                    </CardDetails>
                                </Card>
                                
                            </InnerCard>
                        </OuterCard>

                        
                        
                        <OuterCard>
                            <InnerCard>
                                <Card data-aos="zoom-out">
                                    <CardImg src={User}/>
                                    <CardDetails>
                                        <DetailHeader>UserManagement </DetailHeader>
                                        <DetailBody>A Simple Mern Stack application to handle Crud Operations  for managing Users</DetailBody>
                                        <DetailFooter>
                                            <div><button className="btn btn-primary"><a style={{color:"inherit",textDecoration:"none"}} target="_blank"  href="https://my-user-management.netlify.app/">Live Demo</a></button></div>
                                            <div><button className="btn btn-success"><a  style={{color:"inherit",textDecoration:"none"}} target="_blank" href="https://github.com/suganyajap/user-management-frontend">View Code</a></button></div>
                                        </DetailFooter>
                                    </CardDetails>
                                </Card>
                                
                            </InnerCard>
                        </OuterCard>

                        <OuterCard>
                            <InnerCard>
                                <Card data-aos="zoom-out">
                                    <CardImg src={Todo}/>
                                    <CardDetails>
                                        <DetailHeader>Todo App</DetailHeader>
                                        <DetailBody>A simple To-do-app to add and remove random tasks</DetailBody>
                                        <DetailFooter>
                                            <div><button className="btn btn-primary"><a style={{color:"inherit",textDecoration:"none"}} target="_blank"  href="https://my-todo-app-mern.netlify.app/">Live Demo</a></button></div>
                                            <div><button className="btn btn-success"><a  style={{color:"inherit",textDecoration:"none"}} target="_blank" href="https://github.com/suganyajap/todo-app-react">View Code</a></button></div>
                                        </DetailFooter>
                                    </CardDetails>
                                </Card>
                                
                            </InnerCard>
                        </OuterCard>

                        

                    </CardContainer>
                </InnerContainer>
            </Container>
        </div>
    )
}