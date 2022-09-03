
#!/bin/bash

POSTGRES="0.0.0.0:$POSTGRES_PORT"
echo "Wait for POSTGRES=${POSTGRES}"

wait4ports -q -t 20 tcp://${POSTGRES}


npx prisma migrate deploy  --preview-feature --schema src/prisma/prisma/schema.prisma
npx prisma generate --schema src/prisma/prisma/schema.prisma

yarn run build

yarn run start:prod