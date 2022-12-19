import React from 'react';
import './Blog.css';
import BlogData from '../data/BlogData';



export default function Blog(){
    
    const show = e => {
        const d = e.target.parentElement.nextElementSibling
        console.log(d)
        if (d.style.display === "none"){
            d.style.display = "block";
        }else {
            d.style.display = "none";
        }
    }

    const Results = (props) =>{
        const data = BlogData.filter((item) => item.id === props.id);
            return(
                <>
                    {data.map((item) =>{
                        return(
                            <div className='datablog' key={item.id} style={{display:"none"}}>
                                <h5 className='head-ingredients'>Ingredients</h5>
                                <ul>
                                {item.ingredient.map((ig)=>{
                                    return(
                                        <li className='data' key={ig}>{ig}</li>

                                    )
                                })}
                                </ul>
                                <h5 className='head-ingredients'>Préparation</h5>
                                <ul>
                                {item.preparation.map((pre)=>{
                                    return(
                                        <li className='data' key={pre}>{pre}</li>
                                    )
                                })}
                                </ul>
                            </div>
                            
                        )
                    })}
                </>
            )};
    
    return(
        <>
            <section className="blogs" id="blogs">
                <div className="box-blogs">
                    {BlogData.map((item) =>{
                        return(
                            <div className="box" key={item.id}>
                            <img src={item.img} alt="" />
                            <div className="content">
                                <div className="icons">
                                    <span><i className="fas fa-calendar"></i>{item.date} </span>
                                </div>
                                <h3>{item.title}</h3>
                                    <div> <button className="btn" onClick={e=> show(e)}>lire plus</button> </div>
                                    <Results id={item.id} />
                            </div>
                        </div>
                        )
                    })}
                    

                </div>
            </section>
            
        </>
    );
}