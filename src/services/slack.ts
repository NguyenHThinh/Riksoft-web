import axios from "axios";

export const sendToContactChannelSlack = (data: any) => axios.post('/api/slack-contacts',
    data);
