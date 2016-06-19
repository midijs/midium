import Midium from './midium';
import Utils from './utils';
import {setDefaultChannel} from './channel';
import {channelAftertouch, onChannelAftertouch} from './channelAftertouch';
import {controlChange, onControlChange} from './controlChange';
import {noteOff, onNoteOff} from './noteOff';
import {noteOn, onNoteOn} from './noteOn';
import {pitchWheel, onPitchWheel} from './pitchWheel';
import {polyAftertouch, onPolyAftertouch} from './polyAftertouch';
import {programChange, onProgramChange} from './programChange';
import {startClock, stopClock, setClockBpm, onClock, onWhole, onHalf, onQuarter,
	onEight, onSixteenth, onBeat, onSelfClock, onSelfWhole, onSelfHalf,
	onSelfQuarter, onSelfEight, onSelfSixteenth, onSelfBeat} from './clock';
import {getMirror} from './mirror';

Object.assign(Midium, Utils);

Object.assign(Midium.prototype, {
	onChannelAftertouch : onChannelAftertouch,
	onControlChange     : onControlChange,
	onNoteOff           : onNoteOff,
	onNoteOn            : onNoteOn,
	onPitchWheel        : onPitchWheel,
	onPolyAftertouch    : onPolyAftertouch,
	onProgramChange     : onProgramChange,
	channelAftertouch   : channelAftertouch,
	controlChange       : controlChange,
	noteOff             : noteOff,
	noteOn              : noteOn,
	pitchWheel          : pitchWheel,
	polyAftertouch      : polyAftertouch,
	programChange       : programChange,
	setDefaultChannel   : setDefaultChannel,
	startClock          : startClock,
	stopClock           : stopClock,
	setClockBpm         : setClockBpm,
	onClock             : onClock,
	onWhole             : onWhole,
	onHalf              : onHalf,
	onQuarter           : onQuarter,
	onEight             : onEight,
	onSixteenth         : onSixteenth,
	onSelfClock         : onSelfClock,
	onSelfWhole         : onSelfWhole,
	onSelfHalf          : onSelfHalf,
	onSelfQuarter       : onSelfQuarter,
	onSelfEight         : onSelfEight,
	onSelfSixteenth     : onSelfSixteenth,
	getMirror           : getMirror
});

export default Midium;
