import Session from "./Session";

class Channel {
	private sessions: {
		[uId: string]: Session;
	} = {};

	getAll = (): Session[] => Object.values(this.sessions);

	register = (session: Session): void => {
		this.sessions[session.uId] = session;
	};

	unregister = (session: Session): void => {
		delete this.sessions[session.uId];
	};
}

export default Channel;
