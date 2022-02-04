import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
    entries: [
        {
            input: './src/index',
            declaration: true,
            outDir: 'dist'
        }
    ],
    declaration: true
})