@echo off
pushd %~dp0

set src=../MahjongProto
set dst=src\common


del /Q /S "%dst%\*.ts"

::del /Q /S "PlatCommon\*.ts"
::%protots% typescript "PlatCommon"
::xcopy "PlatCommon\*.ts" "src\common" /Y /F
::del /Q /S "PlatCommon\*.ts"

del /Q /S "%src%\*.ts"
call protogx typescript "%src%"
xcopy "%src%\*.ts" "%dst%" /Y /F
del /Q /S "%src%\*.ts"

REM del /Q /S "../../MahjongLobbyCommon\protobuf\commonProto\*.ts"
REM call protogx typescript "../../MahjongLobbyCommon\protobuf\commonProto"
REM xcopy "../../MahjongLobbyCommon\protobuf\commonProto\*.ts" "MahjongFour\src\common" /Y /F
REM del /Q /S "../../MahjongLobbyCommon\protobuf\commonProto\*.ts"


popd
if "%1"=="" pause

