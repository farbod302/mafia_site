import JoinChannel from "@components/join_channel/JoinChannel";

const fetch_chanel_data=(channel_id)=>{
return {channel_id}
}


const join_channel = ({params}) => {
    let channel_data=fetch_chanel_data(params.channel_id)
    return ( 
        <div><JoinChannel channel_data={channel_data}/></div>
     );
}
 
export default join_channel;