import {
    Controller,
    Get, Post,
    Req, Res, Body,
    HttpStatus,
    HttpCode,
    Render
} from '@nestjs/common';
import {UserDto} from './dto/user.dto';
import * as crypto from 'crypto';

@Controller('sessions')
export class SessionsController {
    @HttpCode(200)
    @Get()
    @Render('sign_in')
    new () {}

    @Post()
    async create (@Req() req, @Res() res, @Body() user: UserDto) {
        let token = crypto.createHash('sha256').update(JSON.stringify(user)).digest('hex')
        if (user.name == 'yooobuntu@gmail.com') {
            // req.session['user_token'] = token;
            res.render('users', {token})
        } else {
            res.redirect('/sessions')
        }
    }
}
