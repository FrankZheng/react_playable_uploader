import React, { Component } from "react";
import "./App.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  TextField
} from "@material-ui/core";

import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const VSpacer = props => <div style={{ height: props.height }} />;

const HSpacer = props => <div style={{ height: props.width }} />;

class App extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.dropZoneStyle = "dropZone";
    this.dropZoneDragOverStyle = "dropZone dragOver";
    this.playableURL = null;
    this.state = {
      dropZoneStyle: this.dropZoneStyle,
      playableFile: null
    };
  }

  playableURLChange = e => {};

  onDrop = e => {
    e.preventDefault();
    console.log(e.dataTransfer.files);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      this.setState({
        playableFile: files[0]
      });
    }
    //TODO: check if it's a zip file
    this.setState({
      dropZoneStyle: this.dropZoneStyle
    });
  };

  onDragOver = e => {
    e.preventDefault();
    if (this.state.dropZoneStyle != this.dropZoneDragOverStyle) {
      this.setState({
        dropZoneStyle: this.dropZoneDragOverStyle
      });
    }
  };

  onDragLeave = () => {
    this.setState({
      dropZoneStyle: this.dropZoneStyle
    });
  };

  handleBrowseClick = e => {
    this.fileInput.current.click();
  };

  onFileInputChange = e => {
    console.log(e.target.files);
    const files = e.target.files;
    if (files.length > 0) {
      this.setState({
        playableFile: files[0]
      });
    }
  };

  render() {
    const { dropZoneStyle, playableFile } = this.state;
    console.log(dropZoneStyle);
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className="title">
              Vungle Creative Test Tool
            </Typography>
            <Button color="inherit">HELP</Button>
          </Toolbar>
        </AppBar>

        <Container className="container">
          <Card className="card">
            <CardContent>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Enter the URL for the playable
              </Typography>
              <TextField
                placeholder="e.g. https://example/playable.zip"
                className="playableURLInput"
                multiline
                onChange={this.playableURLChange}
              />
              <VSpacer height={10} />
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Or upload a zip file
              </Typography>
              <div
                className={dropZoneStyle}
                onDrop={this.onDrop}
                onDragOver={this.onDragOver}
                onDragLeave={this.onDragLeave}
                onClick={this.handleBrowseClick}
              >
                <CloudUploadIcon fontSize="large" />
                <Typography color="textSecondary" variant="body1">
                  Drag & Drop
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  or
                </Typography>
                <Typography variant="body2" className="browse">
                  Browse
                </Typography>
                <VSpacer height={10} />
                {playableFile != null && (
                  <Typography variant="body1" className="playableName">
                    {playableFile.name}
                  </Typography>
                )}
                <input
                  type="file"
                  name="bundle"
                  accept="application/zip"
                  style={{ display: "none" }}
                  onChange={this.onFileInputChange}
                  ref={this.fileInput}
                />
              </div>
              <VSpacer height={30} />
              <div className="uploadBtnContainer">
                <Button
                  variant="contained"
                  color="primary"
                  disabled={playableFile == null}
                  className="uploadBtn"
                >
                  Upload
                </Button>
              </div>
            </CardContent>
          </Card>
        </Container>
      </div>
    );
  }
}

export default App;
