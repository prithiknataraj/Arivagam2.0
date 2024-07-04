import React, { Component } from 'react';
import ZegoUIKitPrebuiltVideoConference from '@zegocloud/zego-uikit-prebuilt-video-conference-rn'

export default function VideoConferencePage(props) {
    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltVideoConference
                appID="371684456"
                appSign="ce244062cb81aba4c727d4f4e08f2bcfceb3c4600e53e538edfca1d7a84b712b"
                userID={userID}
                userName={userName}
                conferenceID={conferenceID}

                config={{
                    onLeave: () => { props.navigation.navigate('HomePage') },
                }}
            />
        </View>
    );
}