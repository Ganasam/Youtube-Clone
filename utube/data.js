export const api_key=import.meta.env.VITE_API_KEY;

export const value_conv=(num)=>{
    if(num>=1000000)
        return Math.floor(num/1000000) + 'M';
    else if (num >=1000)
        return Math.floor(num/1000)+'K';
    else
    return num;
}

export const title_short=(title)=>{
   
    if (typeof title === 'string') {
        return title.slice(0,70)+"...";
    } else {
        console.log('Title is not a string or missing');
    }
  
    
}