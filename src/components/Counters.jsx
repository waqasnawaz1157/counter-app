import React from 'react'

const CountersNew = ({counters, addCounter, removeCounter, increase, decrease}) => {
  return (
    <>
        <div className="checkout-box">
            <div className="container">
                <div className="row mt-5">

                    <div className="col-lg-6 col-sm-6">
                        <h4 className='mb-0 mt-2'>{`Counters: ${counters.length}`}</h4>
                    </div>
                    <div className="col-lg-6 col-sm-6 text-end">
                        <button className='btn btn-success' onClick={addCounter}>+ Add Counter</button>
                    </div>

                    <div className="col-lg-12 mt-3">
                        <table className="table table-bordered text-center">
                            <thead>
                                <tr>
                                    <th scope="col">Counter</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {counters.map((item)=> (
                                <tr key={item.id}>
                                    <td>
                                        <button style={{display: 'inline-block' ,width: '40px'}} className="btn btn-primary" onClick={()=> decrease(item.id)}>-</button>
                                        <span style={{display: 'inline-block' ,width: '70px', height: '30px', border: '1px solid #cecece', borderRadius: '6px'}} className="mx-3">{item.count}</span>
                                        <button style={{display: 'inline-block' ,width: '40px'}} className="btn btn-primary" onClick={()=> increase(item.id)}>+</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger' onClick={()=> removeCounter(item.id)}>Remove</button>
                                    </td>
                                </tr> 
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div> 
    </>
  )
}

export default CountersNew
