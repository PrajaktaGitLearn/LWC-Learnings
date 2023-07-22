const store = {};

const subscribe = (eventname,callback) =>{

    if(!store[eventname]){
        store[eventname] = new Set();
    }
    store[eventname].add(callback);
};

const unsubscribe = (eventname,callback) => {
    if(store[eventname]){
        store[eventname].delete(callback);
    }
};

const publish = (eventname,payload) => {
    if(store[eventname]){
        store[eventname].forEach(callback => {
            try{
                callback(payload);
            }catch{
                console.error(error);
            }
        });
    }
};

export default {
    subscribe,
    unsubscribe,
    publish
};