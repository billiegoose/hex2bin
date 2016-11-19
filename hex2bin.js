// Convert hex fed into stdin to raw binary data
process.stdout.setEncoding('hex')
process.stdin.pipe(process.stdout)
