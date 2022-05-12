// 将数字每三位隔开
export function numFun(str:string):string{
    var newStr = "";
    var count = 0;
    if(str.indexOf(".")==-1){
       if(str.charAt(0) == '0'){ //不存在小数点时，判断第一位数字是否为0
          str = str.substring(1);  
      }
      for(var i=str.length-1;i>=0;i--){
        if(count % 3 == 0 && count != 0){
          newStr = str.charAt(i) + "," + newStr;
        }
        else{
          newStr = str.charAt(i) + newStr;
        }
        count++;
      }
      str = newStr;
      return str
    }
    else{
        for(var i=str.indexOf(".")-1;i>=0;i--){
	    if(count % 3 == 0 && count != 0){
	        newStr = str.charAt(i) + "," + newStr;
	     }
	     else{
	        newStr = str.charAt(i) + newStr;
	     }
	     count++;
	 }
 
      return str = newStr + (str).substr((str).indexOf("."),3);
    }
}
// 隐藏长字符串中间为...
export function strOmit(str:string):string{
    if(str.length<14){
        return str
    }else{
        return str = str.slice(0,6) + '...' + str.slice(str.length-7,str.length)
    }
}