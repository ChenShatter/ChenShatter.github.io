
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

    function lastIndexOf(ary,value,fromIndex=ary.length-1){
        for(var i=fromIndex;i>=0;i--){
            if(ary[i]==value){
                return i
            }
        }
        return -1
    }

    function drop(ary,num){
        if(num==undefined){
            ary.splice(0,1)
            return ary
        }
         ary.splice(0,num)
         return ary
    }

    function dropRight(ary,num){
        if(num==undefined){
            num=1
        }
        if(num>ary.length){
            return []
        }else{
            return ary.slice(0,ary.length-num)
        }
    }

    function fill(ary,val,start,end){
         if(start==undefined&&end==undefined){
             for(var i=0;i<ary.length;i++){
                 ary[i]=val
             }
             return ary
         }
         for(var i=start;i<end;i++){
             ary[i]=val
         }
         return ary
    }

    function head(ary){
        if(ary==[]){
            return undefined
        }
        return ary[0]
    }

    function indexOf(ary,val,fromIndex=0){
        for(var i=fromIndex;i<ary.length;i++){
            if(ary[i]==val){
                return i
            }
        }
        return -1
    }

    function initial(ary){
        ary.splice(-1,1)
        return ary
    }

    function reverse(ary){
        var start=0
        var end=ary.length-1
        var a
        while(start<end){
            a=ary[start]
            ary[start]=ary[end]
            ary[end]=a
            start++
            end--
        }
        return ary
    }

    function sortedIndex(ary,val){
        for(var i=0;i<ary.length;i++){
            if(val<=ary[i]){
                return i
            }
        }
        return ary.length
    }

    function max(ary){
        var max1
        if(ary==[]){
            return undefined
        }
        for(var i=1;i<ary.length;i++){
            max1=(ary[i-1]-ary[i])>0?ary[i-1]:ary[i]
        }
        return max1
    }

    function min(ary){
        var min1
        if(ary==[]){
            return undefined
        }
        for(var i=1;i<ary.length;i++){
            min1=(ary[i-1]-ary[i])<0?ary[i-1]:ary[i]
        }
        return min1
    }

    function sum(ary){
        var sum1=0
        for(var i=0;i<ary.length;i++){
            sum1+=ary[i]
        }
        return sum1
    }

    function flatten(array){
        //return [].concat(...ary)直接拼接大佬的理解
        var result=[]
        for(var i=0;i<array.length;i++){
            if(Array.isArray(array[i])){ //判断是否为数组
                result.push(...array[i]) //拆开push
            }else{
                result.push(array[i])
            }
        }
        return result
    }

    function flattenDeep(ary){
        var result=[]
        for(var i=0;i<ary.length;i++){
            if(Array.isArray(ary[i])){
                result.push(...flattenDeep(ary[i]))
            }else{
                result.push(ary[i])
            }
        }
        return result
    }

    function flattenDepth(ary,num){
        while(num){
            ary=flatten(ary)
            num--
        }
        return ary
    }

    function fromPairs(pairs){
        var map={}
        for(var i=0;i<pairs.length;i++){
            map[pairs[i][0]]=pairs[i][1]
        }
        return map
    }

    function difference(ary,...val){
        var result=[]
        var val1=[].concat(val)
        for(var i=0;i<ary.length;i++){
            if(val1.indexOf(ary[i]==-1)){
                result.push(ary[i])
            }
        }
        return result
    }

return {
    compact,chunk,join,last,lastIndexOf,drop,dropRight,fill,head,indexOf,initial,reverse,sortedIndex,max,min,sum,flatten,flattenDeep,flattenDepth,fromPairs,difference,
}

}()