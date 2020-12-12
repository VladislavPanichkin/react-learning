import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    //test this method
    componentDidUpdate (prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode ?
                    <div>
                        <input
                            onChange={this.onStatusChange}
                            onBlur={() => {
                                this.setState({
                                    editMode: false
                                });
                                this.props.updateStatus(this.state.status);
                            }}
                            value={this.state.status}
                            autoFocus={true}
                        />
                    </div>
                    :
                    <div>
                        <span
                            onDoubleClick={() => {
                                this.setState({
                                    editMode: true
                                })
                            }}
                        >
                            {this.props.status || "---"}
                        </span>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;