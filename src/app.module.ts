import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SessionsController } from './sessions.controller';

@Module({
    imports: [],
    controllers: [AppController, SessionsController],
    components: [],
})
export class ApplicationModule {}
