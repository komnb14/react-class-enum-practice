import {ClassEnum} from "class-enum";

export default class LoginStatus extends ClassEnum<LoginStatus> {
    public static readonly success = new LoginStatus('success', 200, '로그인에 성공');
    public static readonly failed = new LoginStatus("failed", 403, '잘못된 비밀번호');
    public static readonly idle = new LoginStatus("idle", 0, '');

    private readonly title!: string;
    private readonly statusCode!: number;
    private readonly message!: string;

    constructor(title: string, status: number, message: string) {
        super(title);
        this.title = title;
        this.statusCode = status;
        this.message = message
    }


    public getMessage() {
        return this.message;
    }

    public isValidate(password: string) {
        if (Number(password) === 111) {
            return LoginStatus.success
        } else {
            return LoginStatus.failed
        };
    }
}
