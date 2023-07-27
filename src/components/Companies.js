import React, { useEffect, useState } from 'react'
import '../styles/Companies.css'

function Companies({baseURL}) {

    const [companies, setCompanies] = useState([])

    useEffect(()=>{
        fetch(`${baseURL}/company`).then(resp=>resp.json()).then(data=>setCompanies(data))
    },[])
  return (
    <div>
        {companies.map(company=>{
            return(
                <div className="company_card">
                    <div className="card-info">
                        <img src={company.image}/>
                        <a href={company.web_link} className="title">{company.name}</a>
                        <p className="title">{company.description}</p>
                        
                    </div>          
                </div>
        )
        })}
    </div>
  )
}

export default Companies