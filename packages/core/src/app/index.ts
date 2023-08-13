import express, { Application, Request, Response } from 'express';

const { PORT = 3000 } = process.env;

export abstract class IApplication {
  protected readonly _config: any;
  protected _database: any;
  protected _server: Application;
  protected _redis: any;

  constructor(config: any) {
    this._config = config;
  }

  abstract start(): Promise<void | any>;
}

export class MicroApp extends IApplication {
  protected readonly _config: any;
  protected _database: any;
  protected readonly _server: Application;
  protected _redis: any;

  constructor() {
    super({});
    this._server = express();

    this._server.get('/', (_: Request, res: Response) => {
      res.send({
        message: 'hello world'
      });
    });
  }

  public get express(): Application {
    return this._server;
  }

  public async start(): Promise<any> {
    this._server.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
  }
}
