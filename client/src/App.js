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
    this.state = {
      dropZoneStyle: "dropZone",
      playableFile: null
    };
  }

  playableURLChange = e => {};

  onDrop = e => {};

  onDragOver = e => {};

  onDragLeave = e => {};

  handleClick = e => {};

  onFileChange = e => {};

  render() {
    const { dropZoneStyle, playableFile } = this.state;
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

        <Container maxWidth="sm" className="container">
          <Card className="card">
            <CardContent>
              <Typography
                className="instruction"
                color="textSecondary"
                gutterBottom
              >
                Enter the URL for the playable
              </Typography>
              <TextField
                placeholder="e.g. https://example/playable.zip"
                className="playableURLInput"
                multiline
                onChange={this.playableURLChange}
              />
              <VSpacer height={10} />
              <Typography
                className="instruction"
                color="textSecondary"
                gutterBottom
              >
                Or upload a zip file
              </Typography>
              <div
                className={dropZoneStyle}
                onDrop={this.onDrop}
                onDragOver={this.onDragOver}
                onDragLeave={this.onDragLeave}
                onClick={this.handleClick}
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
                  onChange={this.onFileChange}
                  ref={this.fileInput}
                />
              </div>
              <VSpacer height={30} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Button
                  style={{ width: 100 }}
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
