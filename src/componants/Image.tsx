interface Iprops{
imageUrl:string,
alt:string,
className:string
}

const Image = ({imageUrl,alt,className}: Iprops) => {
return(
    <div>
<img src={imageUrl} alt={alt} className={className} />
    </div>
)
}
export default Image