import { ScreenContainer } from '../components/ScreenContainer'
import Article from '../components/Article'


export default function Page404() {
return(
    <ScreenContainer>
      <Article style={{ textAlign: 'center'}}>
        <h1>404</h1>
        <p>
          Nope, not here.
        </p>
        <div style={{display: "flex", justifyContent:"center"}}>
          <img
            alt="Tina is sad"
            src="https://tina.io/img/rico-replacement.jpg"
            width="400"
          />
        </div>
        <p style={{ textAlign: 'center', margin: '20px auto'  }}>
          Not sure what you're looking for! 
        </p>
      </Article>
    </ScreenContainer>
)
}