
var chenshatter =function(){

    function chunk(ary,num){
        var result =[]
        var a=[]
        for(var i=0;i<ary.length;i++){
            a.push(ary[i])
            if(a.length==num){
                result.push(a)
                a=[]
            }
        }
        if(a.length>0){
            result.push(a)
        }
        return result
    }


    function compact(ary){
    var result=[]
    for(var i=0;i<ary.length;i++){
        if(ary[i]){
            result.push(ary[i])
        }
    }
    return result
    }

    function join(ary,separator){
        var result=""
        var sep=String(separator)
        if(ary.length==0){
            return result
        }
        for(var i=0;i<ary.length-1;i++){
            result=result+ary[i]+sep
        }
        return result+ary[ary.length-1]
    }

    function last(ary){
        return ary[ary.length-1]
    }

    function lastIndexOf(ary,value,fromIndex){
         fromIndex=ary.length-1
        for(var i=fromIndex;i>=0;i--){
            if(ary[i]==value){
                return i
            }
        }
        return -1
    }

    function drop(ary,num){
        if(num==null){
            return ary.splice(0,1)
        }
        return ary.splice(0,num)
    }

    function dropright(ary,num){
        if(num==null){
            return ary.splice(-1,1)
        }
        return ary.splice(-1,num)
    }

    function fill(ary,val,start,end){
         if(start==null&&end==null){
             for(var i=0;i<ary.length;i++){
                 ary[i]=val
             }
             return ary
         }
         for(var i=start;i<end;i++){
             art[i]=val
         }
         return ary
    }

return {
    compact,chunk,join,last,lastIndexOf,drop,dropright,fill,
}

}()