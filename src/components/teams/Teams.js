import tapete from './img/tapete.jpg';
import { useState,useEffect } from 'react';
import './Teams.scss'
import Chat from '../chat/Chat';
import avatar1 from './img/1_Normal_pj1.png'
import avatar2 from './img/1_Normal_pj2.png'
import avatar3 from './img/1_Normal_pj3.png'
import avatar4 from './img/1_Normal_pj4.png'

function Teams({joinRoom,room,user,setMyChair,myChair,setPlayer,connection,users,players}) {
    //ngOnInit
    useEffect(()=>{
        joinRoom(user,room);
    },[])

    function assignChair(chairNum){
        setPlayer(chairNum);
        setMyChair(chairNum);
    }

    const isReady = async () => {
        try {
          await connection.invoke("IsReady", true);
        } catch (e) {
          console.log(e + ' isReady');
        }
      };

    return (

        <div className="teambox">
            <div className="flex1">
                <div className="players">
                    <p>JUGADORES CONECTADOS</p>
                {users.map((user,i)=>(
                    <div key={i}>{user}</div>
                    ))}
                </div>
                {users.length == 4 ? <div className='minitablero'> 
                    <div>
                    <div className="center" onClick={()=>assignChair(0)}>{players[0]}</div>
                    <div className="row">
                        <div className='rowplayer' onClick={()=>assignChair(1)}>{players[1]}</div>
                        <div className="imagen"><img src={tapete} alt="" /></div>
                        <div className='rowplayer' onClick={()=>assignChair(3)}>{players[3]}</div>
                    </div>
                    <div className="center" onClick={()=>assignChair(2)}>{players[2]}</div>
                    {myChair>-1 ? <div onClick={()=>isReady()} className="okbutton">OK</div> : <></>}
                    </div>
                    <div className='avatares'>
                        <p>Avatares</p>
                        <div>
                            <div><img src={avatar1} alt="" /></div>
                            <div><img src={avatar2} alt="" /></div>
                            <div><img src={avatar3} alt="" /></div>
                            <div><img src={avatar4} alt="" /></div>
                        </div>

                    </div>    
                    </div> : <div>
                            <p>CARGANDO JUGADORES</p>
                        
                            <progress class="nes-progress" value={`${users.length*25}`} max="100"></progress>
                    
                        </div>}
            </div>
        </div>

        
    )

}
export default Teams;