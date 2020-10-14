import React from "react";
import { Transition } from "react-native-reanimated";

export const transition = ({ inAnim, outAnim }) => (
    <Transition.Together>
        <Transition.In
            type={inAnim}
            durationMs={200}
            interpolation="easeInOut"
        ></Transition.In>
        <Transition.Out
            type={outAnim}
            durationMs={500}
            interpolation="easeOut"
            propagation="top"
        />
        <Transition.Change />
    </Transition.Together>
);
