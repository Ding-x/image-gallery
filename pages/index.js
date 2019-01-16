import { EmptyState, Layout, Page } from '@shopify/polaris';
import react,{ Component } from 'react';
import ImageFrameComponent from '../component/ImageFrameComponent'

class Index extends Component{

    render(){
        return(
            <Page fullWidth={true}> 
                    <ImageFrameComponent/>
            </Page>
        )
    }

}


  export default Index;