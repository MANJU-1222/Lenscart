function solve(n)
{
    let a=new Array(40);
    let k=1;
    for(let i=0;i<40;i++)
    {
        a[i]=k;
        k *=3;
    }
    let numofbits=Math.floor(Math.log2(n))+1;
    console.log(numofbits);
    let s=new Set();
    for(let i=0;i<numofbits;i++)
    {
        if(n & (1<<i))
        {
            s.add(a[i]);
        }
    }

    console.log(s.size);
    console.log([...s].join(' '));
}

let n=6;
solve(n);