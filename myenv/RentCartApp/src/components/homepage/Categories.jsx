import React from 'react'



export default function Categories({ categories }) {




    let i = 0;
    let j=0;
    return (
        <div>
            <div className=' categories my-1'>
                <div className="container row">
                    {categories.map((e) => {
                        i++;
                        if (i <= 6) {
                            return (
                                <p key={e.id} className='col-2 my-2' style={{cursor:'pointer'}}>{e.name}</p>
                            )
                        }

                    })}
                </div>
            </div>
            <div className="mobile-categories">
                {categories.map((e) => {
                    j++;
                    if(j<=8){
                    return (
                        <div className='flex' key={e.id} >
                        <img src={e.categoreylogo} alt="categories logo"  />
                        <span>{e.name}</span>
                        </div>
                    )
                    }
                })}
            </div>
        </div>

    )
}
