const Container = ({children, myValue}) => {
  return (
    <div>
        <h2>Este eh o titulo do container</h2>
       
        <p>O valor da nova props eh:{myValue}</p>
        {children}
    </div>
  )
}

export default Container