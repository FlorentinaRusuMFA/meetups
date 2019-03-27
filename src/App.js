import React from 'react';
import BaseHeader from "./layout/BaseHeader";
import Content from "./layout/Content";

class App extends React.Component {
  render() {
    return (
        <React.Fragment>
          <BaseHeader />
            <Content>
              This is the content
            </Content>
        </React.Fragment>
    );
  }
}

export default App;
