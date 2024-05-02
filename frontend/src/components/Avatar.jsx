import Avatar, { genConfig } from 'react-nice-avatar'


const config = genConfig({ sex: "man", hairStyle: "mohawk" })


function AvatarComponent(){
    return <Avatar style={{ width: '4rem', height: '4rem' }} {...config} />
}

export default AvatarComponent